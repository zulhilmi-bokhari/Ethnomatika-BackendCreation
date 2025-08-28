from fastapi import FastAPI, HTTPException
from typing import List
from app.models import HeritageItem, GenerationRequest, GenerationResponse
from langchain.llms.fake import FakeListLLM
from langchain.prompts import PromptTemplate
from langchain.chains import LLMChain

app = FastAPI()

# LangChain setup
responses = [
    "A traditional Indonesian cloth that is made using a manual wax-resist dyeing technique.",
    "An asymmetrical dagger with distinctive blade-patterning achieved through alternating laminations of iron and nickelous iron.",
    "A traditional form of puppet theatre play originating from the Indonesian island of Java."
]
llm = FakeListLLM(responses=responses)
prompt = PromptTemplate(
    input_variables=["topic"],
    template="Generate a concise, one-sentence description for the following heritage topic: {topic}",
)
chain = LLMChain(llm=llm, prompt=prompt)


mock_items = [
    {
        "id": 1,
        "name": "Batik",
        "description": "A traditional Indonesian cloth that is made using a manual wax-resist dyeing technique.",
        "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Batik_Indonesia.jpg/320px-Batik_Indonesia.jpg"
    },
    {
        "id": 2,
        "name": "Kris",
        "description": "An asymmetrical dagger with distinctive blade-patterning achieved through alternating laminations of iron and nickelous iron.",
        "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Kris_Majapahit_berpamor_Beras_Wutah.jpg/220px-Kris_Majapahit_berpamor_Beras_Wutah.jpg"
    },
    {
        "id": 3,
        "name": "Wayang",
        "description": "A traditional form of puppet theatre play originating from the Indonesian island of Java.",
        "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Wayang_Kulit_Performance.jpg/320px-Wayang_Kulit_Performance.jpg"
    }
]

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/items", response_model=List[HeritageItem])
def get_items():
    return mock_items

@app.get("/items/{item_id}", response_model=HeritageItem)
def get_item(item_id: int):
    for item in mock_items:
        if item["id"] == item_id:
            return item
    raise HTTPException(status_code=404, detail="Item not found")

@app.post("/generate_description", response_model=GenerationResponse)
async def generate_description(request: GenerationRequest):
    try:
        result = chain.run(request.topic)
        return {"description": result.strip()}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
