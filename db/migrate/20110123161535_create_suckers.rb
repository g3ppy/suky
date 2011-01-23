class CreateSuckers < ActiveRecord::Migration
  def self.up
    create_table :suckers do |t|
      t.string :name
      t.string :pass
      t.string :link

      t.timestamps
    end
  end

  def self.down
    drop_table :suckers
  end
end
