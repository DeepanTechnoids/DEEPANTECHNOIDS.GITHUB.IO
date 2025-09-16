import React, { useState } from 'react';
import { ArrowLeft, MapPin, Calendar, Clock, Users, DollarSign, CheckCircle } from 'lucide-react';
import JobApplicationForm from '../components/careers/JobApplicationForm';

const CareersPage = () => {
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const jobs = [
    {
      id: 'workday-consultant-senior',
      title: 'Senior Workday Consultant',
      department: 'Human Capital Management',
      location: 'New York, NY / Remote',
      type: 'Full-time',
      experience: '5+ years',
      salary: '$120,000 - $160,000',
      deadline: '2024-03-15',
      description: 'Lead Workday implementation projects for enterprise clients, focusing on HCM, Payroll, and Benefits modules. Drive business requirements gathering, system configuration, and client training.',
      requirements: [
        'Bachelor\'s degree in HR, IT, or related field',
        '5+ years of Workday implementation experience',
        'Workday HCM Pro certification required',
        'Strong client-facing and project management skills',
        'Experience with Workday Studio and EIB tools',
        'Excellent communication and problem-solving abilities'
      ],
      responsibilities: [
        'Lead end-to-end Workday implementations for large enterprise clients',
        'Configure Workday modules including HCM, Payroll, Benefits, and Time Tracking',
        'Conduct business process analysis and requirements gathering sessions',
        'Provide training and support to client teams',
        'Collaborate with technical teams on integrations and customizations',
        'Ensure project delivery within scope, timeline, and budget'
      ]
    },
    {
      id: 'workday-consultant-junior',
      title: 'Junior Workday Consultant',
      department: 'Human Capital Management',
      location: 'Chicago, IL / Hybrid',
      type: 'Full-time',
      experience: '2-4 years',
      salary: '$80,000 - $100,000',
      deadline: '2024-03-20',
      description: 'Support Workday implementation projects under senior consultant guidance. Assist with system configuration, testing, and client support activities.',
      requirements: [
        'Bachelor\'s degree in HR, IT, Business, or related field',
        '2-4 years of Workday or HR systems experience',
        'Workday HCM certification preferred',
        'Strong analytical and documentation skills',
        'Experience with HR business processes',
        'Willingness to travel up to 25%'
      ],
      responsibilities: [
        'Assist in Workday system configuration and testing',
        'Support data migration and validation activities',
        'Create and maintain project documentation',
        'Participate in client meetings and training sessions',
        'Perform system testing and quality assurance',
        'Provide post-implementation support and troubleshooting'
      ]
    },
    {
      id: 'cloud-architect-aws',
      title: 'Senior Cloud Architect - AWS',
      department: 'Cloud Solutions',
      location: 'San Francisco, CA / Remote',
      type: 'Full-time',
      experience: '7+ years',
      salary: '$150,000 - $200,000',
      deadline: '2024-03-10',
      description: 'Design and implement scalable cloud architectures on AWS for enterprise clients. Lead cloud transformation initiatives and provide technical leadership for complex projects.',
      requirements: [
        'Bachelor\'s degree in Computer Science, Engineering, or related field',
        '7+ years of cloud architecture experience',
        'AWS Solutions Architect Professional certification required',
        'Expertise in containerization (Docker, Kubernetes)',
        'Strong knowledge of DevOps practices and CI/CD pipelines',
        'Experience with Infrastructure as Code (Terraform, CloudFormation)'
      ],
      responsibilities: [
        'Design enterprise-grade cloud architectures on AWS',
        'Lead cloud migration and modernization projects',
        'Develop cloud strategy and roadmaps for clients',
        'Implement security best practices and compliance frameworks',
        'Mentor junior architects and engineering teams',
        'Conduct architecture reviews and provide technical guidance'
      ]
    },
    {
      id: 'cloud-architect-azure',
      title: 'Cloud Architect - Microsoft Azure',
      department: 'Cloud Solutions',
      location: 'Austin, TX / Hybrid',
      type: 'Full-time',
      experience: '5+ years',
      salary: '$130,000 - $170,000',
      deadline: '2024-03-25',
      description: 'Architect and deploy Azure-based solutions for enterprise clients. Focus on hybrid cloud environments and Microsoft ecosystem integrations.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '5+ years of Azure cloud architecture experience',
        'Microsoft Azure Solutions Architect Expert certification',
        'Experience with Azure DevOps and Power Platform',
        'Knowledge of hybrid cloud and on-premises integration',
        'Strong understanding of Microsoft 365 ecosystem'
      ],
      responsibilities: [
        'Design and implement Azure cloud solutions',
        'Architect hybrid cloud environments',
        'Integrate Azure services with Microsoft 365 and on-premises systems',
        'Develop migration strategies for legacy applications',
        'Ensure security and compliance in cloud deployments',
        'Provide technical leadership and client consultation'
      ]
    },
    {
      id: 'workday-integration-specialist',
      title: 'Workday Integration Specialist',
      department: 'Technical Solutions',
      location: 'Boston, MA / Remote',
      type: 'Full-time',
      experience: '4+ years',
      salary: '$100,000 - $130,000',
      deadline: '2024-03-18',
      description: 'Specialize in Workday integrations using Studio, EIB, and Core Connectors. Work with clients to design and implement complex integration solutions.',
      requirements: [
        'Bachelor\'s degree in Computer Science, IT, or related field',
        '4+ years of Workday integration experience',
        'Workday Integration certification required',
        'Proficiency in Workday Studio, EIB, and Core Connectors',
        'Experience with REST/SOAP web services',
        'Strong XML, XSLT, and scripting skills'
      ],
      responsibilities: [
        'Design and develop Workday integrations using Studio and EIB',
        'Configure Core Connectors for third-party system integration',
        'Troubleshoot and optimize integration performance',
        'Create technical documentation and integration specifications',
        'Collaborate with client IT teams on integration requirements',
        'Provide integration support during and after implementation'
      ]
    },
    {
      id: 'cloud-devops-engineer',
      title: 'Cloud DevOps Engineer',
      department: 'Cloud Solutions',
      location: 'Seattle, WA / Remote',
      type: 'Full-time',
      experience: '3+ years',
      salary: '$90,000 - $120,000',
      deadline: '2024-03-22',
      description: 'Implement and maintain CI/CD pipelines, infrastructure automation, and monitoring solutions across multi-cloud environments.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '3+ years of DevOps and cloud automation experience',
        'AWS and/or Azure certifications preferred',
        'Proficiency in Terraform, Ansible, or similar IaC tools',
        'Experience with containerization and orchestration',
        'Strong scripting skills (Python, Bash, PowerShell)'
      ],
      responsibilities: [
        'Design and implement CI/CD pipelines',
        'Automate infrastructure provisioning and management',
        'Monitor and optimize cloud resource utilization',
        'Implement security and compliance automation',
        'Support application deployment and scaling',
        'Collaborate with development teams on DevOps best practices'
      ]
    }
  ];

  const handleBackToMain = () => {
    window.close();
    // Fallback if window.close() doesn't work
    setTimeout(() => {
      window.location.href = '/';
    }, 100);
  };

  const handleApplyClick = (jobId: string) => {
    setSelectedJob(jobId);
    setIsModalOpen(true);
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setSelectedJob(null);
    setIsModalOpen(false);
    // Restore body scroll
    document.body.style.overflow = 'unset';
  };

  const selectedJobData = jobs.find(job => job.id === selectedJob);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={handleBackToMain}
                className="flex items-center text-gray-600 hover:text-yellow-600 transition-colors duration-300"
              >
                <ArrowLeft size={20} className="mr-2" />
                Back to Main Site
              </button>
            </div>
            <div className="flex items-center">
              <div className="text-2xl font-bold bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                Hazeberg
              </div>
              <span className="ml-2 text-lg font-medium text-gray-900">
                Consulting
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Page Content */}
      <main className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Page Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Career <span className="text-yellow-500">Opportunities</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Join our team of experts and help shape the future of business consulting. 
                We're looking for talented professionals in Workday and Cloud Architecture.
              </p>
            </div>

            {/* Job Listings */}
            <div className="space-y-8 mb-16">
              {jobs.map((job) => (
                <div key={job.id} className="glossy-card liquid-hover vibrant-hover golden-hover rounded-2xl p-8 border border-yellow-200">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                    <div className="flex-grow">
                      <div className="flex flex-wrap items-center gap-4 mb-4">
                        <h2 className="text-2xl font-bold text-gray-900">{job.title}</h2>
                        <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium">
                          {job.department}
                        </span>
                      </div>

                      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                        <div className="flex items-center text-gray-600">
                          <MapPin size={16} className="mr-2 text-yellow-500" />
                          <span className="text-sm">{job.location}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Clock size={16} className="mr-2 text-yellow-500" />
                          <span className="text-sm">{job.type}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Users size={16} className="mr-2 text-yellow-500" />
                          <span className="text-sm">{job.experience}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <DollarSign size={16} className="mr-2 text-yellow-500" />
                          <span className="text-sm">{job.salary}</span>
                        </div>
                      </div>

                      <p className="text-gray-600 mb-6 leading-relaxed">{job.description}</p>

                      <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-3">Requirements</h3>
                          <ul className="space-y-2">
                            {job.requirements.map((req, index) => (
                              <li key={index} className="flex items-start text-sm text-gray-600">
                                <CheckCircle size={16} className="mr-2 text-yellow-500 flex-shrink-0 mt-0.5" />
                                {req}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-3">Responsibilities</h3>
                          <ul className="space-y-2">
                            {job.responsibilities.slice(0, 4).map((resp, index) => (
                              <li key={index} className="flex items-start text-sm text-gray-600">
                                <CheckCircle size={16} className="mr-2 text-yellow-500 flex-shrink-0 mt-0.5" />
                                {resp}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="lg:ml-8 lg:flex-shrink-0">
                      <div className="bg-yellow-50 rounded-xl p-6 text-center">
                        <div className="flex items-center justify-center mb-4">
                          <Calendar size={20} className="mr-2 text-yellow-600" />
                          <span className="text-sm font-medium text-gray-700">Application Deadline</span>
                        </div>
                        <div className="text-lg font-bold text-yellow-600 mb-4">
                          {new Date(job.deadline).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </div>
                        <button
                          onClick={() => handleApplyClick(job.id)}
                          className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105 liquid-hover"
                        >
                          Apply Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Modal Overlay */}
            {isModalOpen && selectedJob && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                <div className="max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                  <JobApplicationForm 
                    selectedJob={selectedJobData}
                    onClose={handleCloseModal}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default CareersPage;