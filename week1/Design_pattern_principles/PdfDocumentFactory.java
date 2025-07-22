package week1.Design_pattern_principles;

public class PdfDocumentFactory extends DocumentFactory{
	@Override
	public Document createDocument() {
        return new PdfDocument();
    }
}
