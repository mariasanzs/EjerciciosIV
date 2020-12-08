
require 'etcdv3'

# Insecure connection
conn = Etcdv3.new(endpoints: 'http://127.0.0.1:2379')

# Secure connection using default certificates
#conn = Etcdv3.new(endpoints: 'https://hostname:port')

# Secure connection with Auth
#conn = Etcdv3.new(endpoints: 'https://hostname:port', user: 'root', password: 'mysecretpassword')

# Get actual value
value = conn.get('clave').kvs.first.value
puts "la clave del es:"
puts value
