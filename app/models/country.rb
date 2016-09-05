# == Schema Information
#
# Table name: countries
#
#  id                            :integer          not null, primary key
#  name                          :string
#  iso                           :string
#  shp_url                       :string
#  geojson_url                   :string
#  created_at                    :datetime         not null
#  updated_at                    :datetime         not null
#

class Country < ApplicationRecord
  validates :name, :iso, :shp_url, :geojson_url, :presence => true
  validates :iso, :uniqueness => { case_sensitive: false }

  def iso=(val)
    write_attribute :iso, val.upcase
  end
end
