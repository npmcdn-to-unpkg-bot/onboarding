module Admin::CampaignsHelper
  def sortable(column, title = nil)
    title ||= column.titleize
    css_class = column == sort_column ? "current #{sort_direction}" : nil
    direction = column == sort_column && sort_direction == "asc" ? "desc" : "asc"
    link_to "<span>#{title}</span>".html_safe, {:sort => column, :direction => direction}, {:class => css_class}
  end
end
