#include<iostream>

int main() {
  int t;
  std::cin >> t;
  for(int i = 0; i < t; ++i) {
    int a, b;
    std::cin >> a >> b;
    std::cout << (int)(a / b) + (a % b) << "\n";
  }
  return 0;
}
