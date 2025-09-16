import React, { useState } from 'react';
import { X, Upload, CheckCircle, AlertCircle } from 'lucide-react';

interface JobApplicationFormProps {
  selectedJob: any;
  onClose: () => void;
}

const JobApplicationForm: React.FC<JobApplicationFormProps> = ({ selectedJob, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    certifications: '',
    linkedinPortfolio: '',
    yearsExperience: '',
    agreeTerms: false
  });

  const [files, setFiles] = useState({
    cv: null as File | null,
    coverLetter: null as File | null
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleClose = () => {
    // Reset form state when closing
    setFormData({
      name: '',
      email: '',
      phone: '',
      certifications: '',
      linkedinPortfolio: '',
      yearsExperience: '',
      agreeTerms: false
    });
    setFiles({
      cv: null,
      coverLetter: null
    });
    setIsSubmitted(false);
    setIsSubmitting(false);
    onClose();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, fileType: 'cv' | 'coverLetter') => {
    const file = e.target.files?.[0] || null;
    setFiles(prev => ({
      ...prev,
      [fileType]: file
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check if CV is uploaded
    if (!files.cv) {
      alert('Please upload your resume/CV before submitting.');
      return;
    }
    
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    console.log('Application submitted:', {
      ...formData,
      jobRole: selectedJob?.title,
      files
    });

    setIsSubmitted(true);
    setIsSubmitting(false);

    // Don't auto-close, let user close manually
  };

  // Success Modal
  if (isSubmitted) {
    return (
      <div className="glossy-card liquid-hover rounded-3xl p-8 md:p-12 border border-yellow-200 bg-white shadow-2xl">
        {/* Close button for success modal */}
        <div className="flex justify-end mb-4">
          <button
            onClick={handleClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-300"
          >
            <X size={24} className="text-gray-500" />
          </button>
        </div>
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
            <CheckCircle className="text-green-600" size={40} />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Application Submitted Successfully!
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Thank you for your interest in the <strong>{selectedJob?.title}</strong> position. 
            We've received your application and will review it carefully.
          </p>
          <div className="bg-yellow-50 rounded-xl p-6 mb-6">
            <h3 className="font-semibold text-gray-900 mb-2">What's Next?</h3>
            <ul className="text-left text-gray-600 space-y-2">
              <li>• You'll receive a confirmation email within 24 hours</li>
              <li>• Our HR team will review your application within 5-7 business days</li>
              <li>• If selected, we'll contact you to schedule an initial interview</li>
              <li>• The complete interview process typically takes 2-3 weeks</li>
            </ul>
          </div>
          <button
            onClick={handleClose}
            className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 liquid-hover"
          >
            Close
          </button>
        </div>
      </div>
    );
  }

  // Main Application Form
  return (
    <div className="glossy-card liquid-hover rounded-3xl border border-yellow-200 overflow-hidden bg-white shadow-2xl">
      {/* Header */}
      <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">Apply for Position</h2>
            <p className="opacity-90">{selectedJob?.title}</p>
          </div>
          <button
            onClick={handleClose}
            className="p-2 hover:bg-white/20 rounded-full transition-colors duration-300"
          >
            <X size={24} />
          </button>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="p-8">
        <div className="space-y-6">
          {/* Personal Information */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Personal Information</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                  placeholder="your@email.com"
                />
              </div>
            </div>
          </div>

          {/* Contact & Experience */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact & Experience</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
              <div>
                <label htmlFor="yearsExperience" className="block text-sm font-medium text-gray-700 mb-2">
                  Years of Experience *
                </label>
                <select
                  id="yearsExperience"
                  name="yearsExperience"
                  required
                  value={formData.yearsExperience}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                >
                  <option value="">Select experience level</option>
                  <option value="0-1">0-1 years</option>
                  <option value="2-3">2-3 years</option>
                  <option value="4-5">4-5 years</option>
                  <option value="6-8">6-8 years</option>
                  <option value="9-12">9-12 years</option>
                  <option value="13+">13+ years</option>
                </select>
              </div>
            </div>
          </div>

          {/* Professional Details */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Professional Details</h3>
            <div className="space-y-6">
              <div>
                <label htmlFor="certifications" className="block text-sm font-medium text-gray-700 mb-2">
                  Relevant Certifications
                </label>
                <textarea
                  id="certifications"
                  name="certifications"
                  rows={3}
                  value={formData.certifications}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="List your relevant certifications (e.g., AWS Solutions Architect, Workday HCM Pro, etc.)"
                />
              </div>
              <div>
                <label htmlFor="linkedinPortfolio" className="block text-sm font-medium text-gray-700 mb-2">
                  LinkedIn Profile / Portfolio URL
                </label>
                <input
                  type="url"
                  id="linkedinPortfolio"
                  name="linkedinPortfolio"
                  value={formData.linkedinPortfolio}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                  placeholder="https://linkedin.com/in/yourprofile or portfolio URL"
                />
              </div>
            </div>
          </div>

          {/* File Uploads */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Documents</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Resume/CV *
                </label>
                <div className={`border-2 border-dashed rounded-lg p-6 text-center hover:border-yellow-400 transition-colors duration-300 ${
                  files.cv ? 'border-green-400 bg-green-50' : 'border-gray-300'
                }`}>
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={(e) => handleFileChange(e, 'cv')}
                    className="hidden"
                    id="cv-upload"
                  />
                  <label htmlFor="cv-upload" className="cursor-pointer">
                    <Upload className={`mx-auto mb-2 ${files.cv ? 'text-green-600' : 'text-gray-400'}`} size={24} />
                    <p className={`text-sm ${files.cv ? 'text-green-700 font-medium' : 'text-gray-600'}`}>
                      {files.cv ? `✓ ${files.cv.name}` : 'Click to upload CV (PDF, DOC, DOCX) *'}
                    </p>
                    {!files.cv && (
                      <p className="text-xs text-red-500 mt-1">Resume upload is required</p>
                    )}
                  </label>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Cover Letter
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-yellow-400 transition-colors duration-300">
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={(e) => handleFileChange(e, 'coverLetter')}
                    className="hidden"
                    id="cover-letter-upload"
                  />
                  <label htmlFor="cover-letter-upload" className="cursor-pointer">
                    <Upload className="mx-auto mb-2 text-gray-400" size={24} />
                    <p className="text-sm text-gray-600">
                      {files.coverLetter ? files.coverLetter.name : 'Click to upload Cover Letter (Optional)'}
                    </p>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Terms and Conditions */}
          <div className="bg-gray-50 rounded-xl p-6">
            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                id="agreeTerms"
                name="agreeTerms"
                required
                checked={formData.agreeTerms}
                onChange={handleInputChange}
                className="mt-1 w-4 h-4 text-yellow-600 border-gray-300 rounded focus:ring-yellow-500"
              />
              <label htmlFor="agreeTerms" className="text-sm text-gray-700">
                I agree to the <a href="#" className="text-yellow-600 hover:text-yellow-700 underline">Terms and Conditions</a> and 
                <a href="#" className="text-yellow-600 hover:text-yellow-700 underline ml-1">Privacy Policy</a>. 
                I consent to the processing of my personal data for recruitment purposes.
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={handleClose}
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-all duration-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting || !files.cv}
              className={`px-8 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white rounded-lg font-semibold hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed liquid-hover flex items-center ${
                !files.cv ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Submitting...
                </>
              ) : (
                'Submit Application'
              )}
            </button>
            {!files.cv && (
              <p className="text-xs text-red-500 mt-2 text-right">
                Please upload your resume to submit the application
              </p>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default JobApplicationForm;