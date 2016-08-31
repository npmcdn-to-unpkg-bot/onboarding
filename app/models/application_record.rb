class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true

  def self.search(search)
    if search
      where('lower(name) LIKE ?', "%#{search}%".downcase)
    else
      unscoped
    end
  end
end
