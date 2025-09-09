# Complete GitHub Pages Deployment Guide

## Step-by-Step Instructions

### 1. Prepare Your Local Repository

First, clone your GitHub repository locally:

```bash
git clone https://github.com/DeepanTechnoids/DEEPANTECHNOIDS.GITHUB.IO.git
cd DEEPANTECHNOIDS.GITHUB.IO
```

### 2. Copy Project Files

Copy all the files from this Bolt project to your local repository:

- Copy all files from the current project directory
- Make sure to include the `public` folder with all assets
- Ensure the `.github/workflows/deploy.yml` file is included

### 3. Add All Your Images

**CRITICAL**: You need to manually add all your actual image files to the `public/assets` folder structure:

#### Required Images:
- `public/assets/images/gif.gif` - Your background GIF
- `public/assets/images/DEEPAN.jpg` - Your profile photo
- `public/assets/images/Deepansnap.png` - Your logo/snapshot
- `public/assets/DeepanCV.pdf` - Your resume PDF

#### Hobby Images:
- `public/assets/hobbies/XBOX.png`
- `public/assets/hobbies/RAPTOR.png`
- `public/assets/hobbies/NETFLIX.png`
- `public/assets/hobbies/GYM.png`
- `public/assets/hobbies/DJ.jpg`

#### Award Images (External):
- `public/assets/rewards/external/MICROSOFT.JPG`
- `public/assets/rewards/external/CISCO.png`
- `public/assets/rewards/external/gmass.JPG`
- `public/assets/rewards/external/LENOVO.JPG`
- `public/assets/rewards/external/MICROSOFT_AZURE.png`
- `public/assets/rewards/external/tidepool.JPG`
- `public/assets/rewards/external/advanced_penetration_testing.jpg`
- `public/assets/rewards/external/isci.jpg`

#### Award Images (Internal):
- `public/assets/rewards/internal/STELLAR_AWARD_MAY_7_2024.png`
- `public/assets/rewards/internal/STELLAR_AWARD_JAN_19_2024.png`
- `public/assets/rewards/internal/Client_value_creation_dec_21_2023.png`
- `public/assets/rewards/internal/Team_Player_August_2023_25.png`
- `public/assets/rewards/internal/Growth_Catalyst_Award_August_2023_25.jpg`
- `public/assets/rewards/internal/Team_Player_Award_28_July_2023.png`
- `public/assets/rewards/internal/Accenture_360_Client_value_creation_May_03_2023.png`
- `public/assets/rewards/internal/Team_Player_Nov_21_2022.png`
- `public/assets/rewards/internal/Retail_Industry_Network_AUG_18_2022.png`
- `public/assets/rewards/internal/cognizant_cert_hackathon.jpg`

#### Badge Images:
- `public/assets/badges/1.png` through `public/assets/badges/16.png`

#### Achievement Images:
- `public/assets/achievements/Microsoft_LogO.png`
- `public/assets/achievements/COURIER.jpg`
- `public/assets/achievements/SNOW-35164165.png`
- `public/assets/achievements/aws-logo.png`
- `public/assets/achievements/COGNIZANT.jpg`

### 4. Configure GitHub Repository Settings

1. Go to your GitHub repository: https://github.com/DeepanTechnoids/DEEPANTECHNOIDS.GITHUB.IO
2. Click on **Settings** tab
3. Scroll down to **Pages** section
4. Under **Source**, select **GitHub Actions**
5. Save the settings

### 5. Enable GitHub Actions Permissions

1. In your repository, go to **Settings** → **Actions** → **General**
2. Under **Workflow permissions**, select **Read and write permissions**
3. Check **Allow GitHub Actions to create and approve pull requests**
4. Click **Save**

### 6. Deploy to GitHub Pages

Once you've added all your images and files:

```bash
# Add all files to git
git add .

# Commit the changes
git commit -m "Deploy portfolio to GitHub Pages with all assets"

# Push to main branch
git push origin main
```

### 7. Monitor Deployment

1. Go to your repository on GitHub
2. Click on the **Actions** tab
3. You should see a workflow running called "Deploy to GitHub Pages"
4. Wait for it to complete (usually takes 2-3 minutes)

### 8. Access Your Live Site

Once deployment is complete, your site will be available at:
**https://deepantechnoids.github.io/**

## Important Notes

### Image Optimization Tips:
- Compress images to reduce loading times
- Use WebP format for better compression (optional)
- Ensure images are properly sized for web use

### Troubleshooting:

1. **Images not loading**: Check file paths and ensure images are in the correct `public/assets` folders
2. **Deployment fails**: Check the Actions tab for error messages
3. **Site not updating**: Clear browser cache or wait a few minutes for CDN to update

### File Structure Verification:
```
public/
├── assets/
│   ├── images/
│   │   ├── gif.gif
│   │   ├── DEEPAN.jpg
│   │   └── Deepansnap.png
│   ├── hobbies/
│   │   ├── XBOX.png
│   │   ├── RAPTOR.png
│   │   ├── NETFLIX.png
│   │   ├── GYM.png
│   │   └── DJ.jpg
│   ├── rewards/
│   │   ├── external/
│   │   │   ├── MICROSOFT.JPG
│   │   │   ├── CISCO.png
│   │   │   └── ... (other external awards)
│   │   └── internal/
│   │       ├── STELLAR_AWARD_MAY_7_2024.png
│   │       └── ... (other internal awards)
│   ├── badges/
│   │   ├── 1.png
│   │   ├── 2.png
│   │   └── ... (up to 16.png)
│   ├── achievements/
│   │   ├── Microsoft_LogO.png
│   │   ├── COURIER.jpg
│   │   └── ... (other achievements)
│   └── DeepanCV.pdf
└── vite.svg
```

## Security Considerations

- Never commit sensitive information like API keys
- Your portfolio is public, so ensure all content is appropriate for public viewing
- Consider adding a robots.txt if needed

## Performance Optimization

- The site is optimized for fast loading
- Images will be served from GitHub's CDN
- The build process minifies all assets automatically

Your portfolio will be live and accessible worldwide once deployment completes!