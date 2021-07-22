class AdminsController < ApplicationController
  before_action :set_admin, only: [:show, :update, :destroy]
  # before_action :authenicate_user, only: [:show]
  # skip_before_action :authorized, only: [:create]

  # GET /admins
  def index
    @admins = Admin.all.map{|admin| admin.serialize}

    render json: @admins
  end

  # GET /admins/1
  def show
    render json: @admin.serialize
  end

  # POST /admins
  # def create
  #   @admin = Admin.new(admin_params)

  #   if @admin.save
  #     render json: @admin, status: :created, location: @admin
  #   else
  #     render json: @admin.errors, status: :unprocessable_entity
  #   end
  # end

  def create
    @admin = Admin.new(admin_params)
    # binding.pry
    if @admin.save
      @token = encode_token(admin_id: @admin.id)
      render json: { admin: @admin.serialize, jwt: @token }, status: :created
    else
      render json: { error: 'failed to create @admin' }, status: :not_acceptable
    end
  end

  # PATCH/PUT /admins/1
  def update
    if @admin.update(admin_params)
      render json: @admin.serialize
    else
      render json: @admin.errors, status: :unprocessable_entity
    end
  end

  # DELETE /admins/1
  def destroy
    @admin.destroy
    render json: @admin.serialize
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_admin
      @admin = Admin.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def admin_params
      # params.fetch(:admin, {}).permit(:username, :name, :password, :resturant_id)
      params.permit(:username, :name, :password, :resturant_id)
    end
end
