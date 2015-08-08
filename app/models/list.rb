class List < ActiveRecord::Base
  validates :title, :board_id, presence: true

  belongs_to :board
  has_one :user, through: :board
end
