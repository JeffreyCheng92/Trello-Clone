class Api::ListsController < ApplicationController
  def new
    @list = List.new
    render json: @list
  end

  def create
    #remember to get the board_id from this.model in the event handler
    @list = List.new(list_params)

    if @list.save
      render json: @list
    else
      render json: @list.errors.full_messages, status: :unprocessable_entity
    end
  end

  # def index
  #   @lists =
  # end
  # 
  # def show
  #   @list = List.find(params[:id])
  # end

  def edit

  end

  def update
  end

  def destroy
    @list = List.find(params[:id])
    @list.destroy
    render json: @list
  end

  private
  def list_params
    params.require(:list).permit(:title, :board_id)
  end

end
