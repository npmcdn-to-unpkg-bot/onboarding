class TaskStatus < EnumerateIt::Base
  associate_values(
      archived: [1, 'Archived'],
      draft: [2, 'Draft'],
      something_else_entirely: [3, 'Something else entirely']
  )
end
