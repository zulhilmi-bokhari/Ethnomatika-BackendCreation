from pydantic import BaseModel

class HeritageItem(BaseModel):
    id: int
    name: str
    description: str
    image_url: str

class GenerationRequest(BaseModel):
    topic: str

class GenerationResponse(BaseModel):
    description: str
