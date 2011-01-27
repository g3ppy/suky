class Sucker < ActiveRecord::Base
  attr_accessible :name, :pass, :link, :regex

  validates :name,    :presence => true
  validates :pass,    :presence => true
  validates :link,    :presence => true
end
