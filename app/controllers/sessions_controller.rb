class SessionsController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.find_by_credentials(params[:users][:username],
                                     params[:users][:password])
    if @user
      log_in(@user)
      redirect_to root_url
    else
      @user = User.new
      flash.now[:errors] = ["Invalid Credentials"]
      render :new
    end
  end

  def destroy
    log_out
    redirect_to new_session_url
  end

end
