package org.Dionysus.InteractionEntity;

import java.util.List;

public class WaitingRoomStateEntity {
    private String code;
    private String name;
    private List<String> tickets;
	/**
	 * @return the code
	 */
	public String getCode() {
		return code;
	}
	/**
	 * @param code the code to set
	 */
	public void setCode(String code) {
		this.code = code;
	}
	/**
	 * @return the name
	 */
	public String getName() {
		return name;
	}
	/**
	 * @param name the name to set
	 */
	public void setName(String name) {
		this.name = name;
	}
	/**
	 * @return the tickets
	 */
	public List<String> getTickets() {
		return tickets;
	}
	/**
	 * @param tickets the tickets to set
	 */
	public void setTickets(List<String> tickets) {
		this.tickets = tickets;
	}
}