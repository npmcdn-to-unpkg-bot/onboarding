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
end
