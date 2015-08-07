class BoardsController < ApplicationController
  respond_to :json

  def index
    @boards = Board.where(user_id: current_user.id)
    render json: @boards
  end

  def show
    @board = Board.find(params[:id])
    render json: @board
  end

  def new
    @board = Board.new
    render json: @board
  end

  def create
    @board = current_user.boards.new(board_params)
    if @board.save
      render json: @board
    else
      render json: @board.errors.full_messsages, status: :unprocessable_entity
    end
  end

  def edit
    @board = Board.find(params[:id])
  end

  def update
    @board = Board.find(params[:id])
    if @board.update(board_params)
      render json: @board
    else
      render json: @board.errors.full_messsages, status: :unprocessable_entity
    end
  end

  def destroy
    @board = Board.find(params[:id])
    @board.destroy
    render json: @board
  end

  private
  def board_params
    params.require(:board).permit(:title)
  end

end
