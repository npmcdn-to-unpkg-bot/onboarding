class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true

  def self.search(search)
    if search
      where('lower(name) LIKE ?', "%#{search}%".downcase)
    else
      all
    end
  end
end
