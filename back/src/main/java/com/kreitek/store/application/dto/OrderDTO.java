package com.kreitek.store.application.dto;

import com.kreitek.store.domain.entity.Address;
import com.kreitek.store.domain.entity.OrderItem;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

public class OrderDTO implements Serializable {

private Long id;

private Date createdDate;

private Double totalPrice;

private List<OrderItem> orderItems;

private Long userId;

private Address address;
}
