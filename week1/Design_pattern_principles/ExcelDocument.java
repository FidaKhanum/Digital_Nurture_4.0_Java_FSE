package week1.Design_pattern_principles;

public class ExcelDocument implements Document {
	@Override
	public void open() {
        System.out.println("Opening Excel document.");
    }
}
