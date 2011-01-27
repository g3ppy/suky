module ApplicationHelper
  def signed_in
    cookie = ["secret","pass","word"]
    
    if cookie == cookies.signed[:remember_token]
      return true
    else
      return false
    end
  end
end
