class ResturantsController < ApplicationController
  before_action :set_resturant, only: [:show, :update, :destroy]
  skip_before_action :authorized, only: [:index, :show]

  # GET /resturants
  def index
    @resturants = Resturant.all.map{| res | res.serialize}

    render json: @resturants
  end

  # GET /resturants/1
  def show
    render json: @resturant.serialize
  end

  # POST /resturants
  def create
    @resturant = Resturant.new(resturant_params)

    if @resturant.save
      render json: @resturant, status: :created, location: @resturant
    else
      render json: @resturant.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /resturants/1
  def update
    # binding.pry
    if @resturant.update(resturant_params)
      render json: @resturant.serialize
    else
      render json: @resturant.errors, status: :unprocessable_entity
    end
  end

  # DELETE /resturants/1
  def destroy
    @resturant.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_resturant
      @resturant = Resturant.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def resturant_params
      # params.fetch(:resturant, {}).permit(:name, :image)
      params.permit(:name, :about)
    end
end
