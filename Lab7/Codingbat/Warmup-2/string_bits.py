def string_bits(str):
  bit = ""
  for i in range(0, len(str), 2):
    bit += str[i]
  return bit