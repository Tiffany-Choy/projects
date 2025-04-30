import java.util.PriorityQueue;

public class Main {
    public static void main(String[] args) {
        PriorityQueue<Patient> patientQueue = new PriorityQueue<>(new PatientPriorityComparator());

        // Add patients to the queue
        patientQueue.add(new Patient("Alice", 3));
        patientQueue.add(new Patient("Bob", 1));
        patientQueue.add(new Patient("Charlie", 2));
        patientQueue.add(new Patient("David", 1));

        // Serve patients based on priority
        while (!patientQueue.isEmpty()) {
            Patient nextPatient = patientQueue.poll();
            System.out.println("Serving patient: " + nextPatient);
        }
    }
}