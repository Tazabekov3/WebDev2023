def front_back(str):
    if len(str) <= 1:
      return str
    n = len(str) - 1
    return str[n] + str[1: n] + str[0]