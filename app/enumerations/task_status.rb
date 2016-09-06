class TaskStatus < EnumerateIt::Base
  associate_values(
      archived: [1, 'Archived'],
      draft: [2, 'Draft'],
      live: [3, 'Live']
  )
end
