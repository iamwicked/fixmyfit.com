const Service = require("../models/serviceModel");

// Add a New Service (Admin Only)
exports.addService = async (req, res) => {
  try {
    const { name, description, price, estimatedTime } = req.body;

    const newService = new Service({ name, description, price, estimatedTime });
    await newService.save();

    res.status(201).json({ message: "Service added successfully", service: newService });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get All Services
exports.getAllServices = async (req, res) => {
  try {
    const services = await Service.find();
    res.json(services);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update Service (Admin Only)
exports.updateService = async (req, res) => {
  try {
    const { name, description, price, estimatedTime } = req.body;
    const service = await Service.findById(req.params.id);

    if (!service) return res.status(404).json({ message: "Service not found" });

    service.name = name || service.name;
    service.description = description || service.description;
    service.price = price || service.price;
    service.estimatedTime = estimatedTime || service.estimatedTime;

    await service.save();
    res.json({ message: "Service updated", service });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
