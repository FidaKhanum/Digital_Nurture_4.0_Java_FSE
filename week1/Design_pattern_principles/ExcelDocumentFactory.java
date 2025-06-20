package week1.Design_pattern_principles;

public class ExcelDocumentFactory extends DocumentFactory {
	@Override
	public Document createDocument() {
        return new ExcelDocument();
    }
}
