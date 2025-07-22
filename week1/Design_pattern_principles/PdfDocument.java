package week1.Design_pattern_principles;

public class PdfDocument implements Document {
	@Override
	public void open() {
        System.out.println("Opening PDF document.");
    }
}
