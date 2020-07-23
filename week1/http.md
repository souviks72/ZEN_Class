GET Request:
GET request is sent in the header.
Hence limited data can be sent.
The data is exposed to the url and can be seen by anyone
It is faster and more widely used than POST.
GET request can be bookmarked
POST Request:
POST request sends data in the body.
Hence it is more secure,
can send larger amounts of data,
is more secure
and is not as fast as GET


HTTP1.1 vs HTTP 2
HTTP2 leaves all of HTTP1's semantics like methods,status codes,URIs and header fields, intact. This means that to implement HTTP2 
we need not make completely change how the apllication works. Instead we can take advantage of the new features of the HTTP2 to increase
the performance of our websites. Also HTTP2 sends more data than the client requested, knowing the client will eventually need it.
It also multiplexes streams to prevent blocking.
