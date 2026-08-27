import logging

logger = logging.getLogger(__name__)

# MongoDB Atlas Dual Sync Helper
MONGO_URI = "mongodb+srv://aidcevvpp_user:aliabbas1234578!@cluster0.mongodb.net/aidcevvpp_db?retryWrites=true&w=majority"
DB_NAME = "aidcevvpp_db"

def sync_to_mongo(collection_name, data):
    """
    Syncs record to MongoDB Atlas cloud database.
    If PyMongo or Cloud Mongo is unreachable, logs fallback safely.
    """
    try:
        from pymongo import MongoClient
        client = MongoClient(MONGO_URI, serverSelectionTimeoutMS=2000)
        db = client[DB_NAME]
        collection = db[collection_name]
        result = collection.insert_one(data)
        logger.info(f"[MongoDB Sync Success] Inserted into {collection_name} ID: {result.inserted_id}")
        return True
    except Exception as e:
        logger.warning(f"[MongoDB Sync Fallback] Cloud database offline or un reachable: {e}")
        return False
