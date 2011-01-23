require 'test_helper'

class GrabControllerTest < ActionController::TestCase
  test "should get test" do
    get :test
    assert_response :success
  end

  test "should get create" do
    get :create
    assert_response :success
  end

end
