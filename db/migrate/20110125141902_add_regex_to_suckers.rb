class AddRegexToSuckers < ActiveRecord::Migration
  def self.up
    add_column :suckers, :regex, :string
  end

  def self.down
    remove_column :suckers, :regex
  end
end
