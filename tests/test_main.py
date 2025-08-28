from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)

def test_read_main():
    response = client.get("/")
    assert response.status_code == 200
    assert response.json() == {"Hello": "World"}

def test_get_items():
    response = client.get("/items")
    assert response.status_code == 200
    assert len(response.json()) == 3

def test_get_item():
    response = client.get("/items/1")
    assert response.status_code == 200
    assert response.json()["name"] == "Batik"

def test_get_item_not_found():
    response = client.get("/items/99")
    assert response.status_code == 404
    assert response.json() == {"detail": "Item not found"}

def test_generate_description():
    response = client.post("/generate_description", json={"topic": "keris"})
    assert response.status_code == 200
    assert "description" in response.json()
