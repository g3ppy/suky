class SuckersController < ApplicationController
  def index
    @suckers = Sucker.all
  end

  def new
    @sucker = Sucker.new
  end

  def create
    @sucker = Sucker.new(params[:sucker])
    if @sucker.save
      # Handle a successful save.
    end
  end
  
  def show
    @idzor = params[:id]
    @sucker = Sucker.find_all_by_name(@idzor)
  end
  
  def destroy
    Sucker.find(params[:id]).destroy
    redirect_to suckers_path
  end
  
  def dummy
    
  end
  
end
