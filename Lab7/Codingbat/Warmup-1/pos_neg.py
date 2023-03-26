def pos_neg(a, b, negative):
    if negative and a < 0 and b < 0:
        return True
    elif not negative and a * b < 0:
        return True
    return False