require 'sinatra'
before do
    configure do
        set :public_folder, File.dirname(__FILE__) + '/static'
    end
  end
get '/' do
    erb :index
end