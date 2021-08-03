class FoodsController < ApplicationController
  before_action :set_category
  before_action :set_food,  only: [:show, :update, :destroy]
  skip_before_action :authorized, only: [:index, :show]

  # GET /foods
  def index
    # binding.pry
    
    @foods = @category.foods.map{|food| food.serialize}

    render json: @foods
  end

  # GET /foods/1
  def show
    render json: @food.serialize
  end

  # POST /foods
  def create
    # binding.pry
    @food = Food.new(food_params)

    if @food.save
      render json: @food.serialize, status: :created, location: @food.serialize
    else
      render json: @food.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /foods/1
  def update
    if @food.update(food_params)
      render json: @food.serialize
    else
      render json: @food.errors, status: :unprocessable_entity
    end
  end

  # DELETE /foods/1
  def destroy
    @food.destroy
    render json: @food.serialize
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_food
      @food = @category.foods.find(params[:id])
    end

    def set_category
      @category = Category.find(food_params[:category_id])
    end
    # Only allow a list of trusted parameters through.
    def food_params
      # params.fetch(:food, {})
      params.permit(:name, :cost,  :calories, :description, :category_id, :image)
    end
end
