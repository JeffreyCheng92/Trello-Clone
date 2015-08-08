class User < ActiveRecord::Base
  validates :password_digest, :username, :session_token, presence: true, uniqueness: true
  validates :password, length: {minimum: 6, allow_nil: true}
  attr_reader :password
  after_initialize :ensure_session_token

  has_many :boards
  has_many :lists, through: :boards

  def self.generate_session_token
    SecureRandom.urlsafe_base64
  end

  def self.find_by_credentials(username, password)
    user = User.find_by_username(username)

    return (user && user.is_password?(password)) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token
    self.session_token = User.generate_session_token
    self.save!
    return self.session_token
  end

  private

  def ensure_session_token
    self.session_token = User.generate_session_token
  end

end
