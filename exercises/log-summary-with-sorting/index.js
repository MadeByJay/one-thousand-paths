// Problem recap:
// Input: single long string of log lines separated by \n.
// Each line: "<method> <endpoint> <statusCode>"
// You must output a comma-separated list of endpoints sorted by:
// Descending errorCount (server errors >= 500)
// Tie-break on endpoint name lexicographically (ascending)
// Example shape of output: "/api/users,/api/orders".
