class SessionsController < ApplicationController
  def new
    @magicvar = true
    
    srand(rand())

    @rone = rand(Integer(rand() * 1000))
    @rtwo = rand(Integer(rand() * 1000))
    @rthree = rand(Integer(rand() * 1000))
    #rndm = Random.new
    #@rone = rndm.rand(Integer(rndm.rand() * 100))
    #@rtwo = rndm.rand(Integer(rndm.rand() * 100))
    #@rthree = rndm.rand(Integer(rndm.rand() * 100))
  end
  
  def create
    #raise params.inspect
    resp = params[:tag].to_i
    if resp.nil? 
      redirect_to '/'
    end
    o = Integer(params[:one])
    t = Integer(params[:two])
    th = Integer(params[:three])
    if resp == o * (t + th)
      cookies.permanent.signed[:remember_token] = ["secret","pass","word"]
    end
    redirect_to "/"
  end

  def destroy
    cookies.delete(:remember_token)
    redirect_to "/"
  end
  
  def show
    @cook = cookies.signed[:remember_token]
  end

end
