namespace :db do
  desc "Create sample development data"
  task :sample => :environment do
    if Rails.env != 'development'
      abort("Can only load sample data in development environment, currently in #{Rails.env}")
    end

    users = [
        {
            email: 'admin@example.com',
            password: 'password',
            password_confirmation: 'password'
        }
    ]

    # Create users
    if User.all.count === 0
      User.create(users)
      puts "Users created successfully"
    end
  end
end
