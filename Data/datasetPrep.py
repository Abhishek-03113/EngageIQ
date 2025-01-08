import random
import pandas as pd
from datetime import datetime, timedelta

def generateDate():
    end_date = datetime.now()
    start_date = end_date - timedelta(days=60)  # Two months ago
    random_date = start_date + (end_date - start_date) * random.random()
    return random_date


def generate_post():
    post_types = ['Image', 'Video', 'Reel', 'Carousel']

    post_type = random.choice(post_types)
    
    likes = random.randint(100, 5000)
    comments = random.randint(20, 800)
    shares = random.randint(10, 500)
    save_count = random.randint(50, 1500)
    impressions = random.randint(1000, 15000)
    reach = random.randint(1000, 12000)

    posted_at = generateDate()

    return [post_type, likes, comments, shares, impressions, reach, save_count, posted_at]

def generate_instagram_data(num_posts=100):
    data = []
    for _ in range(num_posts):
        data.append(generate_post())
    
    columns = ['Post Type', 'Likes', 'Comments', 'Shares', 'Impressions', 'Reach', 'Save Count', 'Posted At']

    df = pd.DataFrame(data, columns=columns)
    
    return df

instagram_data = generate_instagram_data(num_posts=100)

instagram_data.to_csv('mock_instagram_data.csv', index=False)