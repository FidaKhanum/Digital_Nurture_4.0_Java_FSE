package week1.Design_pattern_principles;

public class WordDocumentFactory extends DocumentFactory{
	@Override
	public Document createDocument() {
        return new WordDocument();
    }
}
