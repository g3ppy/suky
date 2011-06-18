class SuckersController < ApplicationController
  def index
    @suckers = Sucker.all
  end

  def new
    @sucker = Sucker.new
  end

  def create
    #raise params.inspect
    if params.key?("sucker")
      if params[:sucker].key?("name") and params[:sucker].key?("pass")
        params[:sucker][:name].strip!
        params[:sucker][:name].gsub!(/[.]/, 'DOT')
        params[:sucker][:name].gsub!(/[@]/, 'AT')
        
        if params[:sucker].key?("link")
          reggy = params[:sucker][:link].scan(/^(http|https):\/\/([a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5})(:[0-9]{1,5})?(\/.*)?$/ix)
          params[:sucker][:regex] = (!reggy.nil? && !reggy.empty?) ? (reggy.first[1]) : ("Site")
        end
        
        @sucker = Sucker.new(params[:sucker])
        if @sucker.save
          # Handle a successful save.
        end
      end
    end
  end
  
  def show
    @idzor = params[:id]
    @sucker = Sucker.find_all_by_name(@idzor)
    #raise @sucker.inspect
    if @sucker.nil? or @sucker.empty?
      redirect_to '/'
    end
  end
  
  def destroy
    Sucker.find_by_id(params[:id]).destroy
    redirect_to :back
  end
  
  def collide
    suckers = Sucker.find(:all, :select => "name").map(&:name).uniq
    @collisions = []
    suckers.each do |s|
      
      regs = Sucker.find_all_by_name(s, :select => "regex").map(&:regex).uniq
      regs.each do |r|
        res = Sucker.find_all_by_name_and_regex(s,r)
        if res.size > 1
          @collisions << res
        end
      end
    end
    
    #raise @col.inspect
    
  end
  
end
