def parrot_trouble(talking, hour):
    if talking and not (7 <= hour <= 20):
        return True
    return False
