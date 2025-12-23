const completionSpec: Fig.Spec = {
  name: "pulsar",
  description: "Launch the Pulsar text editor",
  args: {
    template: ["filepaths", "folders"],
    isVariadic: true,
  },
};

export default completionSpec;
