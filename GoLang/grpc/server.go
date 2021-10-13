package grpc

import (
	"log"
	"net"

	"google.golang.org/grpc"
)

func main() {
	lis, err := net.Listen("tcp", "9000")
	if err != nil {
		log.Fatal("Failed to listen on port 9000: %w", err)
	}

	var grpcServer = grpc.NewServer()

	if err:= grpcServer.Serve(lis); err != nil {
		log.Fatal("Falied to serve gRPC server over port 9000: %w", err)
	}

	
}
