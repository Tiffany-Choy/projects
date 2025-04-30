public class Patient {
    String name;
    int priority;
    String doctorAssigned;

    public Patient(String name, int priority){
        this.name = name;
        this.priority = priority;
    }
    @Override
    public String toString() {
        return "Patient{" +
                "name='" + name + '\'' +
                ", priority=" + priority +
                '}';
    }
}
