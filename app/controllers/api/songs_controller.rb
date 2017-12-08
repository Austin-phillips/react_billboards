class Api::SongsController < ApplicationController
  before_action :set_billboard

  def index
    render json: Song.all
  end 

  def show 
  end 
  
  def create 
    song = @billboard.songs.create(song_params)
    if song.save
      render json: song
    else
      binding.pry
    end
  end 

  def update
    binding.pry
  end 

  def destroy
  end 

  private

  def set_billboard
    @billboard = Billboard.find(1)
  end

  def song_params
    params.require(:song).permit(:title, :artist)
  end

end
