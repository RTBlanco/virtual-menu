class CategoriesController < ApplicationController
  before_action :set_category, only: [:show, :update, :destroy]
  skip_before_action :authorized, only: [:index, :show]

  # GET /categories
  def index
    @categories = Category.all.map{|cat| cat.serialize}

    render json: @categories
  end

  # GET /categories/1
  def show
    render json: @category.serialize_one
  end

  # POST /categories
  def create
    # binding.pry
    @category = Category.new(category_params)

    if @category.save
      render json: @category.serialize_one, status: :created, location: @category.serialize_one
    else
      render json: @category.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /categories/1
  def update
    if @category.update(category_params)
      render json: @category.serialize_one
    else
      render json: @category.errors, status: :unprocessable_entity
    end
  end

  # DELETE /categories/1
  def destroy
    @category.destroy
    render json: @category.serialize_one
  end 
  
  private
    # Use callbacks to share common setup or constraints between actions.
    def set_category
      @category = Category.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def category_params
      params.fetch(:category, {}).permit(:name, :resturant_id)
    end
end